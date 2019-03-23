
# react-native-building-blocks

## Getting started

`$ npm install react-native-building-blocks --save`

### Mostly automatic installation

`$ react-native link react-native-building-blocks`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-building-blocks` and add `RNBuildingBlocks.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNBuildingBlocks.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNBuildingBlocksPackage;` to the imports at the top of the file
  - Add `new RNBuildingBlocksPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-building-blocks'
  	project(':react-native-building-blocks').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-building-blocks/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-building-blocks')
  	```

## Usage
```javascript
import RNBuildingBlocks from 'react-native-building-blocks';

// TODO: What to do with the module?
RNBuildingBlocks;
```
  
