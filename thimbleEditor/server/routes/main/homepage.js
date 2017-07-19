var querystring = require("querystring");
var defaultProjectNameKey = require("../../../constants").DEFAULT_PROJECT_NAME_KEY;
var uuid = require("uuid");
module.exports = function(config, req, res) {
  var locale = (req.localeInfo && req.localeInfo.lang) ? req.localeInfo.lang : "en-US";
  var qs = querystring.stringify(req.query);
  if(qs !== "") {
    qs = "?" + qs;
  }

  var options = {
    loginURL: config.appURL + "/" + locale + "/login",
    editorHOST: config.editorHOST,
    editorURL: config.editorURL,
    URL_PATHNAME: "/" + qs,
    languages: req.app.locals.languages,
    pageName: "home"
  };
  /*********************/
  function getProjectMetadata(config, req, callback) {
  var project = req.project;
  var remixId = req.params.remixId;
  var anonymousId = req.params.anonymousId;
  var locale = (req.localeInfo && req.localeInfo.locale) ? req.localeInfo.locale : "en-US";

  if(project) {
    callback(null, 200, {
      id: project.id,
      userID: req.user.publishId,
      anonymousId: project.anonymousId,
      remixId: project.remixId,
      title: project.title,
      dateCreated: project.date_created,
      dateUpdated: project.date_updated,
      tags: project.tags,
      description: project.description,
      publishUrl: project.publish_url
    });
    return;
  }

  if(!remixId) {
    callback(null, 200, {
      anonymousId: anonymousId,
      title: req.gettext(defaultProjectNameKey, locale)
    });
    return;
  }

  utils.getRemixedProject(config, remixId, function(err, status, project) {
    if(err) {
      callback(err, status);
      return;
    }

    callback(null, 200, {
      anonymousId: anonymousId,
      remixId: remixId,
      title: project.title,
      description: project.description
    });
  });
}
getProjectMetadata(config, req, function(err, status, projectMetadata) {
    res.set({
      "Cache-Control": "no-cache"
    });

    if(err) {
      res.status(status);
      next(HttpError.format(err, req));
      return;
    }

    options.projectMetadata = encodeURIComponent(JSON.stringify(projectMetadata));

  /************************/
  if (req.user) {
    options.username = req.user.username;
    options.avatar = req.user.avatar;
    options.logoutURL = config.logoutURL;
  }
  var qs = querystring.stringify(req.query);
  if(qs !== "") {
    qs = "?" + qs;
  }
 else{
    qs = "1"
  }
  res.redirect(307, "/" + locale + "/anonymous/" +  qs);
  //res.render("homepage/index.html", options);
  //res.render("editor/index.html", options);
})
};
