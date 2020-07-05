import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  void playSound(int soundNumber) {
    final player = AudioCache();
    player.play('note$soundNumber.wav');
  }

  Expanded buildKey({int soundNumber, Color color}) {
    return Expanded(
      child: FlatButton(
        onPressed: () {
          this.playSound(soundNumber);
        },
        color: color,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              this.buildKey(soundNumber: 1, color: Colors.red),
              this.buildKey(soundNumber: 2, color: Colors.orange),
              this.buildKey(soundNumber: 3, color: Colors.yellow),
              this.buildKey(soundNumber: 4, color: Colors.green),
              this.buildKey(soundNumber: 5, color: Colors.teal),
              this.buildKey(soundNumber: 6, color: Colors.blue),
              this.buildKey(soundNumber: 7, color: Colors.purple),
            ],
          ),
        ),
      ),
    );
  }
}
