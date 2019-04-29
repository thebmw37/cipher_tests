describe("Test Caesar Encryption", function() {
 	var enc;

    beforeEach(function() {
        enc = new Encryptor(); //Create an encryptor object
    });

    it("Check with password 'test' and 1 shift", function() {
         //Basic test
         expect( enc.caesar("test", 1) ).toEqual("uftu");
    });

    it("Check with password 'abcd1234' and 21 shifts", function() {
         //Long shift including numbers
         expect( enc.caesar("abcd1234", 21) ).toEqual("vwxy1234");
    });

    it("Check with password '' and 1 shift", function() {
         //Blank password field test
         expect( enc.caesar("", 1) ).toEqual("");
    });

    it("Check with password 'ABCDETUVWXYZ' and 24 shifts", function() {
         //Capital letters test
         expect( enc.caesar("ABCDETUVWXYZ", 24) ).toEqual("YZABCRSTUVWX");
    });

    it("Check with password 'AQW2ihweCNBdiwhiw@#|||' and 14 shifts", function() {
         //Complex characters test
         expect( enc.caesar("AQW2ihweCNBdiwhiw@#|||", 14) ).toEqual("OEK2wvksQBPrwkvwk@#|||");
    });

    it("Check with password 'wxyzabcde' and 26 shifts", function() {
         //Full cirlce test (26 shifts)
         expect( enc.caesar("wxyzabcde", 26) ).toEqual("wxyzabcde");
    });

    it("Check with password 'abcdewxyz' and 0 shifts", function() {
         //No shift test (0 shifts)
         expect( enc.caesar("abcdewxyz", 0) ).toEqual("abcdewxyz");
    });

    it("Check with password '!@#$%^&*()-+{}|?><' and 10 shifts", function() {
         //No shiftable characters test
         expect( enc.caesar("!@#$%^&*()-+{}|?><", 10) ).toEqual("!@#$%^&*()-+{}|?><");
    });
});

describe("Test Vigenere Encryption", function() {
 	var enc;

    beforeEach(function() {
        enc = new Encryptor(); //Create an encryptor object
    });

    it("Check with password 'test' and key = '1'", function() {
         //Basic test
         expect( enc.vigenere("test", "a") ).toEqual("TEST");
    });

    it("Check with password 'hello' and key = 'ab'", function() {
         //Testing with length 2 key
         expect( enc.vigenere("hello", "ab") ).toEqual("HFLMO");
    });

    it("Check with password 'HUADAWDAWUDH' and key = 'abc'", function() {
         //Testing with capital letters
         expect( enc.vigenere("HUADAWDAWUDH", "abc") ).toEqual("HVCDBYDBYUEJ");
    });

    it("Check with password 'jinfewh1234' and key = 'cq'", function() {
         //Testing with numbers
         expect( enc.vigenere("jinfewh1234", "cq") ).toEqual("LYPVGMJ");
    });

    it("Check with password 'oasihd!@$%sdnk' and key = 'loc'", function() {
         //Testing with special characters
         expect( enc.vigenere("oasihd!@$%sdnk", "loc") ).toEqual("ZOUTVFDRPV");
    });

    it("Check with password 'abcdef123jkl' and key = 'plokijuhygtfrdes'", function() {
         //Testing with a longer key
         expect( enc.vigenere("abcdef123jkl", "plokijuhygtfrdes") ).toEqual("PMQNMODRJ");
    });

    it("Check with password 'abcdef123jkl' and key = 'z'", function() {
         //Testing with z key
         expect( enc.vigenere("abcdef123jkl", "abcdef123jkl") ).toEqual("ACEGIKSUW");
    });

    it("Check with password 'abcefghijklmnopqrstuvwxyz' and key = 'abcefghijklmnopqrstuvwxyz'", function() {
         //Testing double alphabet case
         expect( enc.vigenere("abcefghijklmnopqrstuvwxyz", "abcefghijklmnopqrstuvwxyz") ).toEqual("ACEIKMOQSUWYACEGIKMOQSUWY");
    });

});
