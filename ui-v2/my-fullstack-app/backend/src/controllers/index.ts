class IndexController {
    public async getExample(req, res) {
        res.json({ message: "Hello from the IndexController!" });
    }

    public async postExample(req, res) {
        const data = req.body;
        res.status(201).json({ message: "Data received", data });
    }
}

export default IndexController;