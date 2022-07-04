import express from "express";
import expressAsyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const contactRouter = express.Router();

contactRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const { firstName, lastName, phone, email, message } = req.body;
    let transporter = nodemailer.createTransport(
      smtpTransport({
        port: 465,
        secure: true, //ssl
        host: "smtp.zoho.com",
        auth: {
          user: "sgs.contact@zohomail.com",
          pass: "Brazil1236987!",
        },
      })
    );

    let mailOptions = {
      from: "sgs.contact@zohomail.com",
      to: "sitetest300@gmail.com",
      subject: "contact",
      text: ` first name : ${firstName} \n last name : ${lastName}\n  phone: ${phone} \n email: ${email} \n message: ${message}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(404).send({
          success: false,
          message: "Error connecting to mail server!",
        });
      } else {
        res.status(200).send({
          success: true,
          data: { email: email, message: "Successfully send the mail" },
        });
      }
    });
  })
);
contactRouter.post(
  "/estimate",
  expressAsyncHandler(async (req, res) => {
    const { name, phone, email, need, message } = req.body;
    let transporter = nodemailer.createTransport(
      smtpTransport({
        port: 465,
        secure: true, //ssl
        host: "smtp.zoho.com",
        auth: {
          user: "sgs.contact@zohomail.com",
          pass: "Brazil1236987!",
        },
      })
    );

    let mailOptions = {
      from: "sgs.contact@zohomail.com",
      to: "sitetest300@gmail.com",
      subject: "Estimate demand",
      text: ` name : ${name} \n phone: ${phone} \n email: ${email} \n need estimate on: ${need} \n message: ${message}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(404).send({
          success: false,
          message: "Error connecting to mail server!",
        });
      } else {
        res.status(200).send({
          success: true,
          data: { email: email, message: "Successfully send the mail" },
        });
      }
    });
  })
);

contactRouter.post(
  "/quote",
  expressAsyncHandler(async (req, res) => {
    const { name, phone, email, cartItems } = req.body;
    let transporter = nodemailer.createTransport(
      smtpTransport({
        port: 465,
        secure: true, //ssl
        host: "smtp.zoho.com",
        auth: {
          user: "sgs.contact@zohomail.com",
          pass: "Brazil1236987!",
        },
      })
    );

    let mailOptions = {
      from: "sgs.contact@zohomail.com",
      to: "sitetest300@gmail.com",
      subject: "Quote demand",

      html: `
      <h4><b>name:</b> ${name}</h4>
      <h4><b>email:</b> ${email}</h4>
      <h4><b>phone number:</b> ${phone}</h4>
      <h4><b>need invoice on:</b> ${cartItems.length} items</h4>
      <table border="1">
      <tr>
       
        
        <th>name</th>
        <th>quantity</th>
      </tr>
      ${cartItems.map((el) => {
        return "<tr><td>" + el.name + "</td><td>" + el.quantity + "</td></tr>";
      })}
      </table>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(404).send({
          success: false,
          message: "Error connecting to mail server!",
        });
      } else {
        res.status(200).send({
          success: true,
          data: { email: email, message: "Successfully send the mail" },
        });
      }
    });
  })
);

export default contactRouter;
