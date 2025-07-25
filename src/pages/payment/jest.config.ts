module.exports = {
  rootDir: "src",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // لتشغيل TypeScript
    "^.+\\.(js|jsx)$": "babel-jest", // لتشغيل JavaScript (اختياري لو في ملفات JS)
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // لدعم ملفات الستايل
    "^single-spa-react/parcel$": "single-spa-react/lib/cjs/parcel.cjs",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testMatch: ["**/__tests__/**/*.(ts|tsx|js|jsx)", "**/?(*.)+(spec|test).(ts|tsx|js|jsx)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
