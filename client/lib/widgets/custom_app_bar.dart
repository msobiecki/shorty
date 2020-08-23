import 'package:client/screens/screens.dart';
import 'package:flutter/material.dart';

import '../assets.dart';

class CustomAppBar extends StatelessWidget {
  final double scrollOffset;

  const CustomAppBar({
    Key key,
    this.scrollOffset = 0.0,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        vertical: 10.0,
        horizontal: 24.0,
      ),
      color:
          Colors.black.withOpacity((scrollOffset / 350).clamp(0, 1).toDouble()),
      child: SafeArea(
        child: Row(
          children: [
            Container(
              padding: EdgeInsets.all(5.0),
              color: Colors.white,
              child: Image.asset(Assets.shortyLogo),
            ),
            SizedBox(
              width: 12.0,
            ),
            Expanded(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  _AppBarButton(
                    title: 'Search short',
                    onTap: () => {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => RootScreen(
                            currentIndex: 0,
                          ),
                        ),
                      ),
                    },
                  ),
                  _AppBarButton(
                    title: 'Add short',
                    onTap: () => {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => RootScreen(
                            currentIndex: 1,
                          ),
                        ),
                      ),
                    },
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}

class _AppBarButton extends StatelessWidget {
  final String title;
  final Function onTap;

  const _AppBarButton({Key key, this.title, this.onTap}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 15.0),
        child: Text(
          title,
          style: TextStyle(
            color: Colors.white,
            fontSize: 16.0,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
    );
  }
}
