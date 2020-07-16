import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Padding(
        padding: EdgeInsets.symmetric(horizontal: 24),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Container(
              height: 200.0,
              child: Image.asset('images/logo.png'),
            ),
            SizedBox(
              height: 48.0,
            ),
            TextField(
              onChanged: (value) {
                //Do something with the user input
              },
              decoration: InputDecoration(
                hintText: 'Enter your email',
                contentPadding:
                    EdgeInsets.symmetric(vertical: 10, horizontal: 20),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(32.0)),
                ),
                enabledBorder: OutlineInputBorder(
                  borderSide:
                      BorderSide(color: Colors.lightBlueAccent, width: 1.0),
                  borderRadius: BorderRadius.all(Radius.circular(32.0)),
                ),
                focusedBorder: OutlineInputBorder(
                  borderSide:
                      BorderSide(color: Colors.lightBlueAccent, width: 2),
                  borderRadius: BorderRadius.all(Radius.circular(32.0)),
                ),
              ),
            ),
            SizedBox(
              height: 8.0,
            ),
            TextField(
              onChanged: (value) {
                //Do something with the user input.
              },
              decoration: InputDecoration(
                hintText: 'Enter your password',
                contentPadding:
                    EdgeInsets.symmetric(vertical: 10, horizontal: 20),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(32)),
                ),
                enabledBorder: OutlineInputBorder(
                  borderSide:
                      BorderSide(color: Colors.lightBlueAccent, width: 1),
                  borderRadius: BorderRadius.all(Radius.circular(32)),
                ),
                focusedBorder: OutlineInputBorder(
                  borderSide:
                      BorderSide(color: Colors.lightBlueAccent, width: 2),
                  borderRadius: BorderRadius.all(Radius.circular(32)),
                ),
              ),
            ),
            SizedBox(
              height: 24,
            ),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 16),
              child: Material(
                color: Colors.lightBlueAccent,
                borderRadius: BorderRadius.all(Radius.circular(30)),
                elevation: 5,
                child: MaterialButton(
                  onPressed: () {
                    //Implement login functionality.
                  },
                  minWidth: 200,
                  height: 42,
                  child: Text(
                    'Log In',
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
