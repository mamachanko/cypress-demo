/// <reference types="cypress"/>

describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should say hello", () => {
    cy.contains(/welcome.*travellers/i);
  });

  describe("when navigating to the about page", () => {
    beforeEach(() => {
      cy.get('a[href="/about"]').click();
    });

    it("shows the about page", () => {
      cy.contains(/this is an about page/i);
    });

    it("does not play the video", () => {
      cy.get("video").should(elements => {
        expect(elements).to.have.length(1);
        expect(elements[0].paused).to.be.true;
      });
    });

    describe("when entering text", () => {
      beforeEach(() => {
        cy.get("input").type(
          "hello{enter}yes, thank you.{enter}this is great!{enter}"
        );
      });

      it("shows the about page", () => {
        cy.contains(/hello.*yes, thank you\..*this is great\!/i);
      });
    });

    describe("when clicking on the video", () => {
      beforeEach(() => {
        cy.get("video").click();
      });

      it("plays the video", () => {
        cy.get("video").then(video => {
          const v: HTMLVideoElement = video[0];
          v.currentTime = 9.5;
          v.play();
        });
        cy.get("video").should(elements => {
          expect(elements).to.have.length(1);
          expect(elements[0].paused).to.be.false;
        });

        cy.wait(2000);

        cy.get("video").then(video => {
          const v: HTMLVideoElement = video[0];
          v.pause();
        });
        cy.get("video").should(elements => {
          expect(elements).to.have.length(1);
          expect(elements[0].paused).to.be.true;
        });
      });
    });
  });
});
