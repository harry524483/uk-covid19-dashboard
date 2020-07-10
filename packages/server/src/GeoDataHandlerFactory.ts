import GeoDataHandler from "./GeoDataHandler";

class GeoDataHandlerFactory {
  public static build() {
    return new GeoDataHandler();
  }
}

export default GeoDataHandlerFactory;
