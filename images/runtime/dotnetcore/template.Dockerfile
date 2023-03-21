# syntax=docker/dockerfile:1.3
# the above line allows this dockerfile to use the secrets fucntionality
ARG DEBIAN_FLAVOR
# Startup script generator
FROM mcr.microsoft.com/oss/go/microsoft/golang:1.18-${DEBIAN_FLAVOR} as startupCmdGen

# GOPATH is set to "/go" in the base image
WORKDIR /go/src
COPY src/startupscriptgenerator/src .
ARG GIT_COMMIT=unspecified
ARG BUILD_NUMBER=unspecified
ARG RELEASE_TAG_NAME=unspecified
ENV RELEASE_TAG_NAME=${RELEASE_TAG_NAME}
ENV GIT_COMMIT=${GIT_COMMIT}
ENV BUILD_NUMBER=${BUILD_NUMBER}
#Bake in client certificate path into image to avoid downloading it
ENV PATH_CA_CERTIFICATE="/etc/ssl/certs/ca-certificate.crt"
RUN ./build.sh dotnetcore /opt/startupcmdgen/startupcmdgen

FROM %BASE_IMAGE_REPO%:%RUNTIME_BASE_IMAGE_TAG%

# Bake Application Insights key from pipeline variable into final image
ARG AI_KEY
ARG USER_DOTNET_AI_VERSION
ENV USER_DOTNET_AI_VERSION=${USER_DOTNET_AI_VERSION}
ENV ORYX_AI_INSTRUMENTATION_KEY=${AI_KEY}
ENV DOTNET_VERSION=%DOTNET_VERSION%
ENV ASPNETCORE_LOGGING__CONSOLE__DISABLECOLORS=true
#Bake in client certificate path into image to avoid downloading it
ENV PATH_CA_CERTIFICATE="/etc/ssl/certs/ca-certificate.crt"

ENV LANG="C.UTF-8" \
    LANGUAGE="C.UTF-8" \
    LC_ALL="C.UTF-8"

# Oryx++ Builder variables
ENV CNB_STACK_ID="oryx.stacks.skeleton"
LABEL io.buildpacks.stack.id="oryx.stacks.skeleton"

COPY --from=startupCmdGen /opt/startupcmdgen/startupcmdgen /opt/startupcmdgen/startupcmdgen
RUN --mount=type=secret,id=sdk_staging_private_storage_sas_token_id \
    set -ex \
    echo $USER_DOTNET_AI_VERSION && ln -s /opt/startupcmdgen/startupcmdgen /usr/local/bin/oryx \
    && apt-get update \
    && apt-get install unzip -y \ 
    && apt-get upgrade --assume-yes \
    && mkdir -p /DotNetCoreAgent \
    && curl -o /DotNetCoreAgent/appinsights.zip "https://oryxsdksstaging.blob.core.windows.net/appinsights-agent/DotNetCoreAgent.$USER_DOTNET_AI_VERSION.zip$(cat /run/secrets/sdk_staging_private_storage_sas_token_id)" \
    && cd DotNetCoreAgent \
    && unzip appinsights.zip && rm appinsights.zip