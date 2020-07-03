import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.blue,
        appBar: AppBar(
          title: Text('Xylophone'),
          backgroundColor: Colors.blue.shade900,
        ),
        body: XyloPhone(),
      ),
    ),
  );
}

class XyloPhone extends StatefulWidget {
  @override
  _XyloPhoneState createState() => _XyloPhoneState();
}

class _XyloPhoneState extends State<XyloPhone> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
