initSockets = ->
  ModulesSockets.shortcutsCfg = (socket, data, callback) ->
    conf = cfg.get()
    conf.descriptions = descriptions
    callback null, conf
  ModulesSockets.shortcutsRefresh = -> cfg.sync()
  ModulesSockets.shortcutsDefaults = (socket, data, callback) ->
    callback null, defConfig