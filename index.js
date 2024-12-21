class Formatter {
  // Static method to capitalize the first letter of a string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Static method to sanitize a string
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-'\s]/g, '');
  }

  // Static method to titleize a string
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');

    return words
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word;
        }
      })
      .join(' ');
  }
}

// Example usage:
console.log(Formatter.capitalize("hello world")); // "Hello world"
console.log(Formatter.sanitize("Hello@World!!")); // "HelloWorld"
console.log(Formatter.titleize("the quick brown fox jumps over the lazy dog")); // "The Quick Brown Fox Jumps Over the Lazy Dog"
