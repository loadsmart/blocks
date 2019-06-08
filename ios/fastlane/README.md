fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## iOS
### ios major
```
fastlane ios major
```
Increment version's major number
### ios minor
```
fastlane ios minor
```
Increment version's minor number
### ios patch
```
fastlane ios patch
```
Increment version's patch number
### ios bump
```
fastlane ios bump
```
Increment build number
### ios test
```
fastlane ios test
```
Run main target test
### ios device
```
fastlane ios device
```
Add new device for debugging
### ios crashlytics_beta
```
fastlane ios crashlytics_beta
```
Submit a new Beta version to Crashlytics Beta
### ios testflight
```
fastlane ios testflight
```
Submit a new Beta version to Testflight
### ios appstore
```
fastlane ios appstore
```
Deploy a new version to the App Store

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
