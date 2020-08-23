import 'package:client/cubits/app_bar_cubit/app_bar_cubit.dart';
import 'package:client/data/data.dart';
import 'package:client/widgets/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class HomeScreen extends StatefulWidget {
  HomeScreen({Key key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  ScrollController _scrollController;

  @override
  void initState() {
    _scrollController = ScrollController()
      ..addListener(() {
        context.bloc<AppBarCubit>().setOffset(_scrollController.offset);
      });
    super.initState();
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final Size screenSize = MediaQuery.of(context).size;
    return Container(
      child: Scaffold(
          extendBodyBehindAppBar: true,
          appBar: PreferredSize(
            preferredSize: Size(screenSize.width, 50.0),
            child: BlocBuilder<AppBarCubit, double>(
                builder: (context, scrollOffset) {
              return CustomAppBar(
                scrollOffset: scrollOffset,
              );
            }),
          ),
          body: CustomScrollView(
            controller: _scrollController,
            slivers: [
              SliverToBoxAdapter(
                child: ContentHeader(content: banner),
              ),
              SliverToBoxAdapter(
                child: ContentSearchBar(),
              ),
              SliverToBoxAdapter(
                child: ContentSearchResult(),
              ),
            ],
          )),
    );
  }
}
