package com.tinguilin.app;

import android.content.Context;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * Indique au JS si Firebase est configure dans ce build (google-services.json
 * present au moment de la compilation => ressource "google_app_id" generee).
 * Sans cela, PushNotifications.register() leve une IllegalStateException
 * ("Default FirebaseApp is not initialized") qui fait planter l'app.
 * Aucune permission, aucune donnee personnelle.
 */
@CapacitorPlugin(name = "TinguilinPushConfig")
public class PushConfigPlugin extends Plugin {

    @PluginMethod
    public void isConfigured(PluginCall call) {
        Context ctx = getContext();
        int resId = ctx.getResources().getIdentifier("google_app_id", "string", ctx.getPackageName());
        JSObject ret = new JSObject();
        ret.put("configured", resId != 0);
        call.resolve(ret);
    }
}
