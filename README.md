<h2>Simpli amal</h2>
Business Consultancy Website<br>
Learn about our tools and services here.
<br><br>
Website developed using ReactJS and MongoDB.

To clone and run this website:
1. Click on Code and copy the URL.
2. Open Git Bash in your folder and type 'git clone (the URL)'
3. Open the folder in your editor and delete the package-lock.json file.
4. Run the command 'npm install' on your terminal and follow the steps to run it.
5. To get the backend to run, type the commands 'cd server' and 'npm install express cors mongoose'
6. Finally, type 'node server.js' to connect to MongoDB.


<h2>Deploying using Kubernetes on Minikube</h2>
<br>
1. Run these commands based on your OS:
✅ On macOS (Use Homebrew)
brew install minikube kubectl docker


2. Start Minikube Cluster
Once installed, start Minikube:
minikube start --driver=docker

Verify it's running:
kubectl get nodes

3. Clone the GitHub Repo Locally
git clone https://github.com/gunj13/reactproject.git
cd reactproject


4. Build the Docker Image
Now, build the Docker image for your React app:
docker build -t react-app .

Once done, verify the image was created:
docker images

The Docker Image is available on Docker Hub
gunj13/react-app

5. Apply the config files:
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f configmap.yaml
Open a tunnel to access the LoadBalancer 
minikube tunnel

6. Finally check if everything is working:
kubectl get pods
kubectl get hpa
kubectl get services

7. You can then run tests over the application!


