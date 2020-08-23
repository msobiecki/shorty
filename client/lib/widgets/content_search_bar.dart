import 'package:client/models/search_result_model.dart';
import 'package:flutter/material.dart';

class ContentSearchBar extends StatefulWidget {
  @override
  _ContentSearchBarState createState() => _ContentSearchBarState();
}

class _ContentSearchBarState extends State<ContentSearchBar> {
  SearchResult searchResult = SearchResult();
  final TextEditingController _searchTextFieldController =
      new TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Padding(
        padding: EdgeInsets.all(12.0),
        child: TextField(
          controller: _searchTextFieldController,
          decoration: InputDecoration(
            contentPadding:
                EdgeInsets.symmetric(horizontal: 25.0, vertical: 20.0),
            fillColor: Colors.white,
            filled: true,
            border: InputBorder.none,
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(30.0),
              borderSide: BorderSide(color: Colors.white),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(30.0),
              borderSide: BorderSide(color: Colors.white),
            ),
            hintText: 'I\'m Feeling Wonderful',
            suffixIcon: Container(
              margin: EdgeInsets.only(right: 4.0),
              width: 50.0,
              height: 50.0,
              child: FlatButton(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30.0),
                ),
                color: Colors.grey[850],
                onPressed: () async {
                  FocusScope.of(context).unfocus();
                  var searchResultData = await searchResult
                      .getSearchResult(_searchTextFieldController.text);
                  setState(() {
                    _searchTextFieldController.clear();
                  });
                  print(searchResultData);
                },
                child: Icon(
                  Icons.search,
                  size: 25.0,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
