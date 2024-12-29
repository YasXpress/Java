/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;
import Model.Product;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author ASUS
 */
public class ProductDao {
    
    // Save method to new Product
    public static void save(Product product) {
        String query = "insert into product(name, category, description, price, quantity)"
                + "values('" + product.getName() + "','" + product.getCategory() + "','" + product.getDescription() + "','" + product.getPrice() + "',"
                + "'" + product.getQuantity() + "')";
        DbOperation.setDataOrDelete(query, "Product Registered Successfully");
    }
    
    
    
    
    
    
    // Get all users method
    public static ArrayList<Product> getAllProduct() {
        ArrayList<Product> productList = new ArrayList<>();
        try {
            String query = "select * from product";
            ResultSet res = DbOperation.getData(query);
            
            while (res.next()) {
                Product product = new Product();
                product.setId(res.getInt("id"));
                product.setName(res.getString("name"));
                product.setCategory(res.getString("category"));
                product.setDescription(res.getString("description"));
                product.setPrice(res.getString("price"));
                product.setQuantity(res.getString("quantity"));
                
                productList.add(product);
            
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return productList;
        
        
        
       
    }

    
     
    public static void  updateSelectedProduct(Product product){
        // Get the selected row index
        String query = "UPDATE product SET name = '" + product.getName() + "', category = '" + product.getCategory() + "', description = '" + product.getDescription() + "', price = '" + product.getPrice() + "', quantity = '" + product.getQuantity() + "' WHERE id = '" + product.getId() + "'";
        DbOperation.setDataOrDelete(query, "Product update Successful !!");
    }

    
    
    
    //Method for delete category
    public static void delete(String id){
        String query = "delete from product where id = '"+id+"'";
        DbOperation.setDataOrDelete(query, "Product delete Successful !!");
    }
    
    
    
}
