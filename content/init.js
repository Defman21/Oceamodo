try {
  var schemeService = Cc['@activestate.com/koScintillaSchemeService;1'].getService();
  var schemeName = "Oceamodo";
  if (schemeService.getScheme(schemeName) != schemeName)
  {
    var _url = "chrome://oceamodo/content/" + schemeName + ".ksf";
    var result = schemeService.loadSchemeFromURI(_url, schemeName);
  }
  var oldScheme = schemeService.activateScheme(schemeName);
  ko.open._notifyHowtoRestoreOldScheme(schemeService, oldScheme, schemeName);
  ko.prefs.setBoolean("showFileIcons", true);
} catch (e) {
  alert("Unable to set Oceamodo scheme! You should do that manually :)");
}