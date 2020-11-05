printf "\n\n"
echo "--------------------------------------------------------------------------------------------------------------------"
echo "Hey Boss, "
echo "=> Please make sure that latest release Version and VersionCode in build.gradle and manifest.xml to generate release APK."
echo "Please Update To Production URL"
echo "--------------------------------------------------------------------------------------------------------------------"
printf "\n\n"

#rm -rf android/app/src/main/res/drawable-*
cd android && ./gradlew clean
#  older react native version ==> http://stackoverflow.com/questions/42072690/react-native-android-release-build-error-unknown-option-configuration/42073531
# Before RN 42
# cd .. && react-native run-android --configuration=release
# AFter RN 42
cd .. && react-native run-android --variant=release