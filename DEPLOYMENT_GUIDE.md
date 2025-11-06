# 🚀 Vercel Deployment Guide for Tanmay Kumar's Portfolio

## Step-by-Step Deployment Process

### **Step 1: Initialize Git Repository (if not already done)**

```bash
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"
```

### **Step 2: Create GitHub Repository**

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it: `tanmay-portfolio` (or any name you prefer)
4. Make it **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### **Step 3: Push Code to GitHub**

```bash
git remote add origin https://github.com/YOUR_USERNAME/tanmay-portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### **Step 4: Deploy to Vercel**

#### **Option A: Deploy via Vercel Dashboard (Recommended)**

1. Go to [vercel.com](https://vercel.com) and sign in (use GitHub to sign in)
2. Click **"Add New Project"** or **"New Project"**
3. Import your GitHub repository:
   - Select your `tanmay-portfolio` repository
   - Click **"Import"**
4. Configure Project Settings:
   - **Framework Preset**: Vercel will auto-detect "Vite"
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
5. Click **"Deploy"**
6. Wait 2-3 minutes for deployment to complete
7. Your site will be live at: `https://tanmay-portfolio.vercel.app` (or custom domain)

#### **Option B: Deploy via Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from your project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? tanmay-portfolio
# - Directory? ./
# - Override settings? No
```

### **Step 5: Configure Custom Domain (Optional)**

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `tanmaykumar.dev`)
4. Follow DNS configuration instructions

### **Step 6: Environment Variables (if needed)**

If you add environment variables later:
1. Go to **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy

---

## ✅ Pre-Deployment Checklist

- [x] All code is committed to Git
- [x] Project builds successfully (`npm run build`)
- [x] No console errors
- [x] All images are in `public/images/` folder
- [x] Resume is in `public/documents/` folder (if needed)
- [x] All links work correctly
- [x] Responsive design works on mobile

---

## 🔧 Build Configuration

Your project is already configured correctly:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: Auto-detected (Vercel uses Node 18+ by default)

---

## 📝 Important Notes

1. **Automatic Deployments**: Vercel will automatically deploy when you push to GitHub
2. **Preview Deployments**: Every pull request gets a preview URL
3. **Build Logs**: Check build logs in Vercel dashboard if deployment fails
4. **Environment**: Production builds are optimized automatically

---

## 🐛 Troubleshooting

### Build Fails?
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Images Not Loading?
- Ensure images are in `public/` folder
- Use paths starting with `/` (e.g., `/images/projects/...`)

### Routing Issues?
- Vercel automatically handles React Router
- No additional configuration needed

---

## 🎉 After Deployment

Your portfolio will be live at:
- **Vercel URL**: `https://tanmay-portfolio.vercel.app`
- **Custom Domain**: (if configured)

Share your portfolio URL with the world! 🚀

