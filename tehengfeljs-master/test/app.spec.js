
describe('input test', () => {
  it('in: "afgjhgf"', () => {
      let act = isGoodInput("afgjhgf");
      expect(false).toBe(act);
  });
  it('in: "14354fdbvuiefh"', () => {
      let act = isGoodInput("14354fdbvuiefh");
      expect(false).toBe(act);
  });
  it('in: 95239', () => {
      let act = isGoodInput(95239);
      expect(true).toBe(act);
  });
});


describe("calc test", function() {
  it("in:5,2 out 219.9114857512855", function() {
    let surface = calcSurface(5,2);
    expect(surface).toEqual(219.9114857512855);
  });
  it("in:10,7 out 1068.1415022205297", function() {
    let surface = calcSurface(10,7);
    expect(surface).toEqual(1068.1415022205297);
  });
  it("in:40, 64 out 26138.050877867077", ()=> {
    let surface = calcSurface(40, 64);
    expect(surface).toEqual(26138.050877867077);
  });
});
