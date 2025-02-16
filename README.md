# IPD Now

![IPD Now Logo](https://shudveta.in/applogo.jpeg) *(Replace with actual logo URL)*

## 🚀 Introduction
IPD Now is a React Native app designed to simplify the process of instant patient data (IPD) collection and management. Built with **Expo** and **Firebase Firestore**, the app ensures seamless data handling with a user-friendly interface.

## 📱 Features
- 📋 **Survey System**: Users can access surveys via a unique code.
- 🔄 **Dynamic Questions**: Questions are loaded from a JSON file, allowing real-time updates.
- 🔥 **Firebase Firestore Integration**: Secure and scalable backend for storing survey responses.
- 📞 **Phone Number Authentication**: Simplified login process.
- 🎨 **Responsive UI**: Optimized layout across different screen sizes.

## 🛠️ Tech Stack
- **Frontend**: React Native (Expo)
- **Backend**: Firebase Firestore
- **State Management**: Context API / Redux *(Choose the one you're using)*
- **Authentication**: Firebase Authentication
- **Icons & Styling**: React Native SVG, TailwindCSS

## 📂 Project Structure
```
IPD-Now/
│── assets/          # App images and icons
│── components/      # Reusable UI components
│── screens/         # App screens (e.g., SurveyScreen, HomeScreen)
│── utils/           # Helper functions
│── App.js           # Main entry point
│── firebaseConfig.js# Firebase setup
│── package.json     # Dependencies and scripts
```

## 🔧 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/IPD-Now.git
   cd IPD-Now
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Setup Firebase:
   - Create a Firebase project.
   - Enable Firestore and Authentication.
   - Copy Firebase config into `firebaseConfig.js`.
4. Start the app:
   ```sh
   expo start
   ```

## 🎯 Usage
- Run the app on an **Android/iOS emulator** or **Expo Go** on your device.
- Enter the survey code to access active surveys.
- Submit responses, which are stored in Firebase.

## 🌟 Contributing
1. **Fork** the repository.
2. **Create a new branch** (`feature-branch`):
   ```sh
   git checkout -b feature-branch
   ```
3. **Make changes and commit**:
   ```sh
   git commit -m "Added new feature"
   ```
4. **Push the branch**:
   ```sh
   git push origin feature-branch
   ```
5. **Submit a pull request**.

## 📜 License
This project is licensed under the **MIT License**.


---
### ⭐ Don't forget to **star** this repository if you find it useful! 🚀

