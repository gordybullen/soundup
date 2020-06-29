class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :genre
      t.integer :duration, null: false
      t.text :description, null: false

      t.timestamps
    end

    add_index :tracks, :user_id
    add_index :tracks, :title
  end
end
