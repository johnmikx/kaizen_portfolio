### 📜 Certificates Folder

This folder is intended for storing images of certificates, awards, or professional certifications.

#### Supported File Types
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

#### Recommended Specifications
- **Resolution:** Minimum 800×600 pixels
- **File Size:** Under 2MB (for faster load times)
- **Quality:** Clear text and visible logos are strongly recommended

#### Integration Instructions
After uploading the certificate images, update the `certificates` array in `components/portfolio.tsx` with the appropriate metadata.

**Example:**
```javascript
{
  title: "Certificate Name",
  issuer: "Issuing Organization",
  date: "2024",
  link: "https://verify-certificate-link.com",
  image: "/certificates/your-certificate.jpg"
}