import 'dart:math';
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.blue,
        appBar: AppBar(
          title: Text('Ask Me Anything'),
          backgroundColor: Colors.blue.shade900,
        ),
        body: AskMeAnything(),
      ),
    ),
  );
}

class AskMeAnything extends StatefulWidget {
  @override
  _AskMeAnythingState createState() => _AskMeAnythingState();
}

class _AskMeAnythingState extends State<AskMeAnything> {
  int ballImageNumber = 1;

  void setBallImage() {
    setState(() {
      ballImageNumber = Random().nextInt(5) + 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        children: <Widget>[
          Expanded(
            child: FlatButton(
              onPressed: () {
                this.setBallImage();
              },
              child: Image.asset('images/ball$ballImageNumber.png'),
            ),
          ),
        ],
      ),
    );
  }
}
