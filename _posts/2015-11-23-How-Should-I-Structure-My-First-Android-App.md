---
layout: post
title: How Should I Structure my First Android App?
---

Jackaltyson on /r/AndroidDev asks an [elementary question about Android development](https://www.reddit.com/r/androiddev/comments/3txxwk/how_should_i_structure_my_app/):

> My design has 3 sections, one for appointments, one for clients, and one for general help with app functions. I am new to app development and the idea of classes and activities, so how should I connect everything? I have no problem (so far) getting everything to look how I want, but it is linking it all up that is my main issue. How to make it so clicking one tab changes the screen, etc.

Jackaltyson, there are many ways to skin the cat, but I'll teach you the simplest way to implement your app.

I recommend that you take the following approach:

It sounds like you have three main screens, so I recommend that you take the simple approach of making one activity per screen, like so:

* `ClientActivity`
* `AppointmentActivity`
* `HelpActivity`

Each one of these is a subclass of `Activity`, and each one has a layout file (`activity_client.xml`, `activity_appointment.xml`, and `activity_help.xml`).

Thus, each file will look something like this:

```java
public class ClientActivity extends Activity {

    override public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    
        setContentView(R.layout.activity_client);
    }

}
```

`AppointmentActivity` and `HelpActivity` will look very similar.

OK, now you have three different activities, but how do you lace them together? 

The easiest thing to do is to put a button in each layout and make the clicking of that button bring you to the next screen.

For example, you would add a `Button` to your `ClientActivity`'s xml layout file, `activity_client.xml` like this:

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    >

    <!-- Other UI Elements Here... -->

    <Button 
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="View Appointments"
        android:onClick="onViewAppointmentsClicked"
        />
    
    <!-- Other UI Elements Here... -->

</RelativeLayout>
```

Note that we are specifying which method should be called when the button is clicked. When it's clicked, we'll call a method called `onViewAppointmentsClicked`.

Here's what that would look like inside of `ClientActivity`:
    
```java
public class ClientActivity extends Activity {

    override public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    
        setContentView(R.layout.activity_client);
    }

    public void onViewAppointmentsClicked(View appointmentsButton) {
         Intent appointmentIntent = new Intent(this, AppointmentActivity.class);
         startActivity(appointmentIntent);
    }

}
```

Finally, in order to make this work, you'll need to declare each of your activities in your `manifest.xml` file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.android.hello" >

    <application
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
            
        <activity android:name=".ClientActivity"
                  android:label="@string/title_activity_client">
        </activity>
        <activity android:name=".AppointmentActivity"
                  android:label="@string/title_activity_appointment">
        </activity>
        <activity android:name=".HelpActivity"
                  android:label="@string/title_activity_help">
        </activity>

    </application>

</manifest>
```

OK, that should get you going. Let me know if you have more questions. Hope this helps!
