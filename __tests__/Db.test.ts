import { MetadataDB } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/Metadata.db";
import * as userMetadataJson from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/systemUser.json";
import * as userData from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/systemUserData.json";
describe("Metadata", () => {
  it("initmetadata", () => {
    const db = new MetadataDB();
    db.initMetadata([JSON.parse(JSON.stringify(userMetadataJson))]);
    const userMetadata = db.metadata.findOne({
      LogicalName: { $eq: "systemuser" },
    });
    expect(userMetadata).not.toBeNull();
    expect(userMetadata.Attributes).not.toBeNull();
    userMetadata.Attributes.forEach((item) => {
      expect(item).not.toBeNull();
      expect(item.LogicalName).not.toBeNull();
    });
  });

  it("initItems", () => {
    const db = new MetadataDB();
    db.initMetadata([JSON.parse(JSON.stringify(userMetadataJson))]);
    db.initItems(JSON.parse(JSON.stringify(userData)));
    expect(db.data).not.toBeNull();
    console.log(db.data);
  });

  it("Get Row", () => {
    const db = new MetadataDB();
    db.initMetadata([JSON.parse(JSON.stringify(userMetadataJson))]);
    db.initItems(JSON.parse(JSON.stringify(userData)));
    const asllan = db.GetRow(
      "systemuser",
      "48268759-f226-ed11-9db1-000d3a264915"
    );
    console.log(asllan);
    expect(asllan).not.toBeNull();
  });
  it("Get column data", () => {
    const db = new MetadataDB();
    db.initMetadata([JSON.parse(JSON.stringify(userMetadataJson))]);
    db.initItems(JSON.parse(JSON.stringify(userData)));
    const asllan = db.GetAllColumn("systemuser", "systemuserid");
    console.log(asllan);
    expect(asllan).not.toBeNull();
    asllan.forEach((as) => {
      expect(as).not.toBeNull();
    });
  });
});
