# 🚀 Direct Vercel Deployment (Without GitHub)

## Deploy Your Portfolio Directly to Vercel

You can deploy directly from your computer without using GitHub!

---

## **Step-by-Step Process:**

### **Step 1: Install Vercel CLI**

Open PowerShell in your project folder and run:

```powershell
npm install -g vercel
```

### **Step 2: Login to Vercel**

```powershell
vercel login
```

This will:
- Open your browser
- Ask you to sign in with GitHub/Google/Email
- Authorize the CLI

### **Step 3: Deploy Your Project**

From your project directory, run:

```powershell
vercel
```

**Follow the prompts:**

1. **Set up and deploy?** → Type `Y` and press Enter
2. **Which scope?** → Select your account (usually just press Enter)
3. **Link to existing project?** → Type `N` (No) and press Enter
4. **What's your project's name?** → Type `tanmay-portfolio` (or any name)
5. **In which directory is your code located?** → Type `./` and press Enter
6. **Want to override the settings?** → Type `N` (No) and press Enter

### **Step 4: Production Deployment**

After the first deployment, deploy to production:

```powershell
vercel --prod
```

This will deploy to your production URL!

---

## **Your Live URLs:**

After deployment, you'll get:
- **Preview URL**: `https://tanmay-portfolio-xxxxx.vercel.app`
- **Production URL**: `https://tanmay-portfolio.vercel.app` (after `--prod`)

---

## **Future Updates:**

To update your live site:

```powershell
vercel --prod
```

This will:
1. Build your project
2. Deploy to Vercel
3. Update your live site

---

## **Advantages of Direct Deployment:**

✅ No GitHub account needed  
✅ Fast deployment  
✅ Works offline (after initial setup)  
✅ Easy updates with one command  

---

## **Note:**

- You'll need a Vercel account (free)
- First deployment creates the project
- Subsequent deployments update the same project
- You can still connect GitHub later if you want

---

## **Quick Commands Reference:**

```powershell
# First time setup
vercel login
vercel

# Production deployment
vercel --prod

# Preview deployment (default)
vercel
```

---

That's it! Your portfolio will be live in minutes! 🎉

