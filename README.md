# HeavenHome

Welcome to HeavenHome, your go-to platform for browsing and discovering real estate properties for rent or sale.

## Features

- **Property Listings:** Browse a wide range of real estate properties available for rent or sale.
- **Wishlist:** Save your favorite properties to your wishlist for easy access later.
- **User Authentication:** Securely login with GitHub, Google, Twitter, or by creating an account.
- **Property Details:** Access detailed information about each property, including photos, specifications, and pricing.
- **Responsive Design:** Enjoy a seamless browsing experience across devices, from desktops to smartphones.

## Packages Used

- **Swiper JS:** For interactive property sliders.
- **AOS Animation:** Add smooth animations to enhance user experience.
- **React Hook Form:** Simplify form handling and validation in React applications.

## Live Site

Visit the live site: [HeavenHome](https://heavenhome-a5bf8.web.app)

## Installation Instructions

To get HeavenHome up and running on your local machine, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)
- Firebase account

### Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/anasahammad/heaven-home
    cd heaven-home
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add your environment variables:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    ```

4. **Run the development server:**
    ```sh
    npm start
    ```

### Deployment

For deployment, follow the standard practices for deploying React applications. You can use services like Vercel, Netlify, or Firebase Hosting.

---

Now, you should have HeavenHome running locally on your machine. Enjoy browsing and discovering real estate properties!
