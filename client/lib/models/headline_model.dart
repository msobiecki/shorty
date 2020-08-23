import 'package:flutter/material.dart';
import 'package:meta/meta.dart';

class Headline {
  final String title;
  final String imageUrl;
  final String description;

  const Headline({
    @required this.title,
    @required this.imageUrl,
    this.description,
  });
}
