// ** https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true

type DesignerPDFViewer = (h: number[], word: string) => number;

const designerPdfViewer: DesignerPDFViewer = (h, word) => {
  let tallestCharHeight = 0;

  for (let i = 0; i < word.length; i++) {
    const index = word.charCodeAt(i) - 97;

    if (h[index] > tallestCharHeight) {
      tallestCharHeight = h[index];
    }
  }

  return tallestCharHeight * word.length;
};
