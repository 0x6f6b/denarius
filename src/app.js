const version = process.env.npm_package_version;
console.log("Version " + version);

const buildInfo = document.getElementById("build-info");
buildInfo.innerHTML = "Denarius Build " + version;
