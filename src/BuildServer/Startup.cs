// --------------------------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
// --------------------------------------------------------------------------------------------

using System.IO;
using JsonFlatFileDataStore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Oryx.BuildServer.Repositories;
using Microsoft.Oryx.BuildServer.Services;
using Microsoft.Oryx.BuildServer.Services.ArtifactBuilders;

namespace Microsoft.Oryx.BuildServer
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Reliability", "CA2000:Dispose objects before losing scope", Justification = "Leaving undisposed object for backwards-compatibility.")]
        public void ConfigureServices(IServiceCollection services)
        {
            string folderName = "/store";
            if (!Directory.Exists(folderName))
            {
                _ = Directory.CreateDirectory(folderName);
            }

            var store = new DataStore("/store/builds.json", keyProperty: "id");
            _ = services.AddHttpContextAccessor();
            _ = services.AddMvc();
            _ = services.AddSingleton<IRepository>(x => new BuildRepository(store));
            _ = services.AddScoped<IArtifactBuilder, ArtifactBuilder>();
            _ = services.AddScoped<IArtifactBuilderFactory, ArtifactBuilderFactory>();
            _ = services.AddScoped<IBuildRunner, BuildRunner>();
            _ = services.AddScoped<IBuildService, BuildService>();
            _ = services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            _ = services.AddSingleton<ILoggerFactory, LoggerFactory>();
            _ = services.AddSingleton(typeof(ILogger<>), typeof(Logger<>));
            _ = services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                _ = app.UseDeveloperExceptionPage();
            }

            _ = app.UseRouting();

            _ = app.UseAuthorization();

            _ = app.UseEndpoints(endpoints =>
            {
                _ = endpoints.MapDefaultControllerRoute();
            });
        }
    }
}
