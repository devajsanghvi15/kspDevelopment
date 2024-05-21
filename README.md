<p float="left">
  <img src="https://github.com/devajsanghvi15/kspDevelopment/assets/136953523/3f6ea4f5-b64a-4763-90d1-4e5bb3ab2d3b" width="380" />
  <img src="https://github.com/devajsanghvi15/kspDevelopment/assets/136953523/4f656e1d-1ad5-44af-88fb-db1f853ba32c" width="380" /> 
</p>
<p float="left">
  <img src="https://github.com/devajsanghvi15/kspDevelopment/assets/136953523/ecd489f4-ff9e-4cbd-b483-441a4f98d4fa" width="380" />
  <img src="https://github.com/devajsanghvi15/kspDevelopment/assets/136953523/cdbcd07d-9a1e-4f37-a219-189f72e360ac" width="380" />
</p>
<p float="left">
  <img src="https://github.com/devajsanghvi15/kspDevelopment/assets/136953523/2a49dbb9-30fc-4485-b672-4e52babe3df8" width="380" />
  <img src="https://github.com/devajsanghvi15/kspDevelopment/assets/136953523/13e6f7aa-526f-4321-9bc5-a234e34db81c" width="380" />
</p>
<p float="left">
  <img src="https://drive.google.com/uc?export=view&id=1hAiceESFe_Mkv7beDnsxsW_vU4GWOcOp" width="380" />
</p>





## Project Setup

This project utilizes Conda for managing the backend environment and npm for managing frontend dependencies. Follow these steps to set up the project:

### Backend Environment Setup

1. **Create Conda Environment:**
   ```bash
   cd /BACKEND
   conda env create -f environment.yml
   ```

2. **Activate Conda Environment:**
   ```bash
   conda activate accident
   ```

### Frontend Setup

3. **Navigate to Frontend Directory:**
   ```bash
   cd /frontend
   ```

4. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

5. **Build Frontend:**
   ```bash
   npm run build
   ```

6. **Serve Frontend:**
   ```bash
   serve -s build
   ```

### Running Backend Server

7. **Navigate to Backend Directory:**
   ```bash
   cd /BACKEND
   ```

8. **Download Weights:**
   Download 'best.pt' and 'pretrained_vit_weights.pth' from the provided [Google Drive link](https://drive.google.com/drive/folders/1DcKAHOW5jiahGnB7nNK7kWKqsTEzya7B).

9. **Paste Weights in Backend Directory:**
   Place the downloaded weights in `/BACKEND/weights`.

10. **Run Backend Server:**
    ```bash
    python manage.py runserver
    ```

### Additional Information

- **Drive Link for Weights:** [Google Drive](https://drive.google.com/drive/folders/1DcKAHOW5jiahGnB7nNK7kWKqsTEzya7B)

---

