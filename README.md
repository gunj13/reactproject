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
<br><hr>

<h2>Deploying using Kubernetes on Minikube</h2>
<br><br>
1. Run these commands based on your OS:<br>
✅ On macOS (Use Homebrew)<br>
brew install minikube kubectl docker<br>

✅ On Windows (Using Chocolatey)<br>
choco install minikube kubernetes-cli docker-desktop<br><br>

2. Start Minikube Cluster<br>
Once installed, start Minikube:<br>
minikube start --driver=docker<br><br>

Verify it's running:<br>
kubectl get nodes<br><br>

3. Clone the GitHub Repo Locally<br>
git clone https://github.com/gunj13/reactproject.git <br>
cd reactproject<br><br>

4. Build the Docker Image<br>
Now, build the Docker image for your React app:<br>
docker build -t react-app . <br>

Once done, verify the image was created:<br>
docker images<br><br>

The Docker Image is available on Docker Hub:
https://hub.docker.com/r/gunj13/react-app <br><br>

5. Apply the config files:<br>
kubectl apply -f deployment.yaml<br>
kubectl apply -f service.yaml<br>
kubectl apply -f configmap.yaml<br>
kubectl get secret react-app-secret<br><br>
Open a tunnel to access the LoadBalancer <br>
minikube tunnel<br><br>

6. Finally check if everything is working:<br>
kubectl get pods<br>
kubectl get hpa<br>
kubectl get services<br>
<br><br>
7. You can then run tests over the application!


