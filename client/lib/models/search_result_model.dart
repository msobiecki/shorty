import 'package:client/assets.dart';
import 'package:client/services/networking.dart';

class SearchResult {
  Future<dynamic> getSearchResult(String searchValue) async {
    NetworkHelper networkHelper =
        NetworkHelper('${Assets.apiUrl}/shorty/$searchValue');
    return await networkHelper.getData();
  }
}
