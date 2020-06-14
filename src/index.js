import Vue from 'vue'
import Report from './Report.vue'

import PDFDocument from 'pdfkit'
import SVGtoPDF from 'svg-to-pdfkit'
import blobStream from 'blob-stream'

import './register-files'


const app = new Vue({
  el: "#app",
  components: { Report },
  data: {
      items: [
        { content: "Item #1", dy: "10%", id: 0},
        { content: "Item #2", dy: "20%", id: 1},
        { content: "Item #3", dy: "30%", id: 2},
      ]
  },
  methods: {
    makePDF() {
      // create a document and pipe to a blob
      var doc = new PDFDocument({
        layout: "portrait",
        size: "A4"
      });
      var stream = doc.pipe(blobStream());

      doc.registerFont('Roboto', 'fonts/Roboto-Regular.ttf');

      SVGtoPDF(doc, this.$refs.container.innerHTML);

      // end and display the document in the iframe to the right
      doc.end();
      stream.on('finish', function() {
        const url = stream.toBlobURL('application/pdf');
        window.location = url;
      });
    }
  }
});
