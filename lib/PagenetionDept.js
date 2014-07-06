
limit = 5;
limitDep = new Deps.Dependency;
 getLimit = function () {
  limitDep.depend()
  return limit;
};
 setLimit = function (val,inc) {
  if (val) limit = val;
  else limit =limit + inc;
  limitDep.changed();
}