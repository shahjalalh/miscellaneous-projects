import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() {
  runApp(XylophoneApp());
}

class XylophoneApp extends StatelessWidget {
  void playSound(int soundNumber) {
    final player = AudioCache();
    player.play('note$soundNumber.wav');
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: SafeArea(
          child: Column(
            children: <Widget>[
              Container(
                child: FlatButton(
                  onPressed: () {
                    this.playSound(1);
                  },
                  color: Colors.red,
                ),
              ),
              Container(
                child: FlatButton(
                  onPressed: () {
                    this.playSound(2);
                    final player = AudioCache();
                    player.play('note2.wav');
                  },
                  color: Colors.orange,
                ),
              ),
              Container(
                child: FlatButton(
                  onPressed: () {
                    this.playSound(3);
                  },
                  color: Colors.yellow,
                ),
              ),
              Container(
                child: FlatButton(
                  onPressed: () {
                    this.playSound(4);
                  },
                  color: Colors.green,
                ),
              ),
              Container(
                child: FlatButton(
                  onPressed: () {
                    this.playSound(5);
                  },
                  color: Colors.teal,
                ),
              ),
              Container(
                child: FlatButton(
                  onPressed: () {
                    this.playSound(6);
                  },
                  color: Colors.blue,
                ),
              ),
              Container(
                child: FlatButton(
                  onPressed: () {
                    this.playSound(7);
                  },
                  color: Colors.purple,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
