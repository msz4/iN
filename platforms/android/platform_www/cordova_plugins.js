cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-nativestorage.mainHandle",
    "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
    "pluginId": "cordova-plugin-nativestorage",
    "clobbers": [
      "NativeStorage"
    ]
  },
  {
    "id": "cordova-plugin-nativestorage.LocalStorageHandle",
    "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
    "pluginId": "cordova-plugin-nativestorage"
  },
  {
    "id": "cordova-plugin-nativestorage.NativeStorageError",
    "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
    "pluginId": "cordova-plugin-nativestorage"
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-nativestorage": "2.3.1",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});