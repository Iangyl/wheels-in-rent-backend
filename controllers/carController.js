class CarController {
  async getCars (req, res) {
    
  }

  async getCar (req, res) {

  }

  async newCar (req, res) {
    const { price, id } = req.body
    const { img } = req.files
  }

  async updateCar (req, res) {

  }

  async deleteCar (req, res) {

  }
}

module.exports = new CarController()
