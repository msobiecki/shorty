import 'package:client/cubits/app_bar_cubit/app_bar_cubit.dart';
import 'package:client/screens/home_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class RootScreen extends StatefulWidget {
  final int currentIndex;

  const RootScreen({Key key, this.currentIndex = 0}) : super(key: key);

  @override
  _RootScreenState createState() => _RootScreenState();
}

class _RootScreenState extends State<RootScreen> {
  final List<Widget> _screens = [HomeScreen(), Scaffold()];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: BlocProvider<AppBarCubit>(
        create: (_) => AppBarCubit(),
        child: _screens[widget.currentIndex],
      ),
    );
  }
}
