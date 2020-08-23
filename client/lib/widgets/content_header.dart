import 'package:client/models/models.dart';
import 'package:flutter/material.dart';

class ContentHeader extends StatelessWidget {
  final Headline content;

  const ContentHeader({Key key, this.content}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Container(
          height: 420,
          decoration: BoxDecoration(
            image: DecorationImage(
                image: AssetImage(content.imageUrl), fit: BoxFit.cover),
          ),
        ),
        Container(
          height: 420,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [Colors.black, Colors.transparent],
              begin: Alignment.bottomCenter,
              end: Alignment.topCenter,
            ),
          ),
        ),
        Positioned(
          left: 0,
          right: 0,
          bottom: 180.0,
          child: SizedBox(
            width: 250.0,
            child: Text(
              content.title,
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                fontFamily: 'Billabong',
                fontSize: 36.0,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
        Positioned(
          left: 0,
          right: 0,
          bottom: 130.0,
          child: SizedBox(
            width: 250.0,
            child: Text(
              content.description,
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                fontSize: 16.0,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
