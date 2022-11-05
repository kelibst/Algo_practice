function removeProperty(obj, prop = "") {
  if (typeof obj.prop !== "undefined") {
    delete obj.prop;
    console.log(obj);
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}

removeProperty({ prop: false, name: "home" });
