<script>
const POSITION = 3;

export default {
  name: "tj-price",
  props: {
    value: [String, Number],
    size: {
      type: Number,
      default: 16
    },
    decimal: Boolean
  },
  computed: {
    context() {
      let price = JSON.parse(JSON.stringify(this.value));

      price = parseFloat(price);

      const floatNum = Math.round(price * 100) / 100;
      let strNum = floatNum.toString();
      let isSpot = strNum.indexOf(".");

      if (isSpot < 0) {
        isSpot = strNum.length;
        strNum += ".";
      }
      

      while (strNum.length < isSpot + 1 + 2) {
        strNum += "0";
      }

      let leftNum = strNum.split(".")[0];
      let rightNum = this.decimal ? "." + strNum.split(".")[1] : "";
      let result;
      const resultArray = new Array();

      if (leftNum.length > POSITION) {
        var i = true;
        while (i) {
          resultArray.push(leftNum.slice(-POSITION));
          leftNum = leftNum.slice(0, leftNum.length - POSITION);
          if (leftNum.length < POSITION + 1) {
            i = false;
          }
        }
        const sortArray = new Array();
        for (var i = resultArray.length - 1; i >= 0; i--) {
          sortArray.push(resultArray[i]);
        }
        result = leftNum + "," + sortArray.join(",") + rightNum;
      } else {
        result = strNum;
      }

      return result;
    }
  },

  render(h) {
    return(<div class="tj-price" style={`font-size: ${this.size}px`}>¥{this.context}</div>)
  },
};
</script>
