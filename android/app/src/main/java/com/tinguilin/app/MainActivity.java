package com.tinguilin.app;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Plugin local: detecte si Firebase (push) est configure dans ce build.
        registerPlugin(PushConfigPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
