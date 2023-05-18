
describe('input test', () => {
    it('in: "afgjhgf"', () => {
        let act = inputCheck("afgjhgf");
        expect(false).toBe(act);
    });
    it('in: "14354fdbvuiefh"', () => {
        let act = inputCheck("14354fdbvuiefh");
        expect(false).toBe(act);
    });
    it('in: 95239', () => {
        let act = inputCheck(95239);
        expect(true).toBe(act);
    });
  });
  
  
  describe('sikertelen beérések %', () => {
    it('in: 10, 10 out: 0', () => {
        let act = getUnsuccessCount(10, 10);
        expect(act).toBe(0);
    });
    it('in: 100, 10 out: 90', () => {
        let act = getUnsuccessCount(100, 10);
        expect(act).toBe(90);
    });
    it('in: 100, 0 out: 100', () => {
        let act = getUnsuccessCount(100, 0);
        expect(act).toBe(100);
    });
});


describe('sikertelen beérések', () => {
    it('in: 10, 10 out: 0', () => {
        let act = getUnsuccessPercent(10, getUnsuccessCount(10, 10));
        expect(act).toBe(0);
    });
    it('in: 100, 10 out: 90', () => {
        let act = getUnsuccessPercent(100, getUnsuccessCount(100, 10));
        expect(act).toBe(90);
    });
    it('in: 100, 0 out: 100', () => {
        let act = getUnsuccessPercent(100, getUnsuccessCount(100, 0));
        expect(act).toBe(100);
    });
});