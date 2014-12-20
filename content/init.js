try {
  var schemeService = Cc['@activestate.com/koScintillaSchemeService;1'].getService();
  var schemeName = "Spacemodo";
  if (schemeService.getScheme(schemeName) != schemeName)
  {
    var _url = "chrome://spacemodoo/content/" + schemeName + ".ksf";
    var result = schemeService.loadSchemeFromURI(_url, schemeName);
  }
  var oldScheme = schemeService.activateScheme(schemeName);
  ko.open._notifyHowtoRestoreOldScheme(schemeService, oldScheme, schemeName);
  ko.prefs.setBoolean("showFileIcons", true);
} catch (e) {
  alert("Unable to set Spacemodo scheme!" + e);
}