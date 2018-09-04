var dest = './public';
var src = './src';

module.exports = {
  javascript: {
    src: src + '/app/**/*.js',
    dest: dest + '/js/',
    entryPoint: src + '/webpack-entry.js',
    packedFile: 'packed.js'
  },
  sass: {
    src: src + '/styles/**/*.{sass,scss}',
    dest: dest + '/styles/',
    settings: {
      indentedSyntax: true,
    }
  },
  html: {
    src: src + '/**/*.html',
    dest: dest,
  },
  favicon: {
    src: src + '/favicon.png',
    dest: dest,
  },
  fonts: {
    src: src + '/styles/fonts/*',
    dest: dest + '/styles/fonts/',
  },
  images: {
    src: src + "/images/*",
    dest: dest + "/images/"
  },
  serveprod: {
    src: src,
    dest: dest
  }
};
